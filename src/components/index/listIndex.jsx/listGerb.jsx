import eduGov from "../../../assets/gerb/edu-gov.png";
import digital from "../../../assets/gerb/digital-gov.png";
import obrnadzor from "../../../assets/gerb/obrnadzor-gov.png";
import { Link } from "react-router-dom";

const listGerb = [
  {
    id: "1",
    img: eduGov,
    title: "Министерство просвещения Российской Федерации",
    link: "https://edu.gov.ru/",
  },
  {
    id: "2",
    img: digital,
    title: "Минцифры России",
    link: "https://digital.gov.ru/news-feed",
  },
  {
    id: "3",
    img: obrnadzor,
    title: "Федеральная служба по надзору в сфере образования и науки",
    link: "https://obrnadzor.gov.ru/",
  },
];

export default listGerb;
