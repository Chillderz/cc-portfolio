import boto3
import io
import zipfile
import mimetypes

def lambda_handler(event, context):
    s3 = boto3.resource('s3')

    location = {
        "bucketName": 'portfoliobuild.cchilders.com',
        "objectKey": 'portfolibuild.zip'
    }
    try:
        job = event.get("CodePipeline.job")
        print event
        
        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "BuildArtifact":
                    location = artifact["location"]["s3Location"]
            
        print "Building portfolio from " + str(location)
                
        portfolio_bucket = s3.Bucket('portfolio.cchilders.com')
        build_bucket = s3.Bucket(location["bucketName"])
        
        portfolio_zip = io.BytesIO()
        build_bucket.download_fileobj(location["objectKey"], portfolio_zip)
        
        with zipfile.ZipFile(portfolio_zip) as myzip:  
            for nm in myzip.namelist():  
                obj = myzip.open(nm)  
                mime_type = mimetypes.guess_type(nm)[0]  
                portfolio_bucket.upload_fileobj(obj, nm,  
                ExtraArgs={'ContentType': str(mime_type)})  
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
           
        print("Job Done")     
        
        if job:
            codepipeline = boto3.client('codepipeline')
            codepipeline.put_job_success_result(jobId=job["id"])
    except:
        raise
        
    return 'Hello from Lambda'
