import { v4 as uuidv4 } from "uuid";
import sliderimg1 from "../../Assets/Images/cornelia-ng-2zHQhfEpisc-unsplash.jpg"
import sliderimg2 from "../../Assets/Images/tasaveeer-studio-ffPis2pqbUg-unsplash.jpg"
import sliderimg3 from "../../Assets/Images/edgar-soto-gb0BZGae1Nk-unsplash.jpg"
import sliderimg from "../../Assets/Images/cornelia-ng-2zHQhfEpisc-unsplash.jpg"

const dataSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    url: "https://images.unsplash.com/photo-1599907888904-14d5d22bfe19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    url: sliderimg1,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    url: sliderimg2,
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    url: sliderimg3,
  },

];

export default dataSlider;
