import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";


it("renders without crahsing", () => {
    render(<Card
        caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum="1"
        totalNum="1"
    />);
});

it("matches snapshot", () => {
    const {asFragment} = render(<Card
        caption={TEST_IMAGES[0].caption}
        src={TEST_IMAGES[0].src}
        currNum="1"
        totalNum="1"
      />);
    expect(asFragment()).toMatchSnapshot();

});


