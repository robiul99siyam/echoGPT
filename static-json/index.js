import { AiTwotoneAppstore } from "react-icons/ai";
import { BiDiamond } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { GoCommentDiscussion } from "react-icons/go";
import { LiaTrashRestoreSolid } from "react-icons/lia";
import { MdOutlineMessage } from "react-icons/md";
import { RiOpenaiFill } from "react-icons/ri";
// TODO: Replace this with your actual data
const EngagementDataStore = [
  {
    id: 1,
    title: "History",
    icon: <GoCommentDiscussion />,
  },
  {
    id: 2,
    title: "Store",
    icon: <LiaTrashRestoreSolid />,
  },
  {
    id: 3,
    title: "AI Task",
    icon: <AiTwotoneAppstore />,
  },
];

const HelpAndSupportDataStore = [
  {
    id: 1,
    title: "Support",
    icon: <MdOutlineMessage />,
  },
  {
    id: 2,
    title: "Subscriptions",
    icon: <BiDiamond />,
  },
  {
    id: 3,
    title: "AI Platforms",
    icon: <RiOpenaiFill />,
  },
  {
    id: 4,
    title: "Discord",
    icon: <BsDiscord />,
  },
];

export { EngagementDataStore, HelpAndSupportDataStore };
