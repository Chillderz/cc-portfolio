import React from 'react';
import { shallow } from 'enzyme';

import ExampleWorkModal from '../js/example-work-modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const myExample = {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    'image': {
        'desc': "example screenshot of a project involving code",
        'src': "images/example1.png",
        'comment': ""
    }
}

describe("ExampleWorkModal component", () => {
    let mockCloseModalFn = jest.fn();

    let component = shallow(<ExampleWorkModal example={myExample} open={false} closeModal={mockCloseModalFn}/>);
    let openComponent = shallow(<ExampleWorkModal example={myExample} open={true}/>); 

    let anchors = component.find("a");

    it("Should contain a single 'a' element", () => {
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => {
        expect(anchors.prop('href')).toEqual(myExample.href);
    });

    it("Should have the modal class set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
    });

    it("Should call the closeModal handler when clicked", () => {
        component.find(".modal__closeButton").simulate('click');
        expect(mockCloseModalFn).toHaveBeenCalled();
    });
});