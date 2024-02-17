import { render, fireEvent } from "@testing-library/react";
import TEST_IMAGES from "./_testCommon.js";
import Card from "./Card.js"


//smoke test to check the basics are okay
it("it should renders without crashing", () => {
    render(<Card caption={TEST_IMAGES[0]['caption']} src={TEST_IMAGES[0]['src']} currNum={1} totalNum={TEST_IMAGES.length - 1} />)
})

//Snapshot test
it('should match snapshot', () => {
    const { asFragment } = render(<Card caption={TEST_IMAGES[0]['caption']} src={TEST_IMAGES[0]['src']} currNum={1} totalNum={TEST_IMAGES.length - 1} />)
    expect(asFragment()).toMatchSnapshot();
})
