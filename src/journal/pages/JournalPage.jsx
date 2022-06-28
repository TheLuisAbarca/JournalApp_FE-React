import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      { /* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corrupti laudantium, eveniet aperiam repudiandae debitis quia ea exercitationem asperiores nihil omnis optio eaque minus obcaecati, impedit dolor nemo nobis minima.
      </Typography> */}
      <NothingSelectedView />
      {/* NotePage */}
    </JournalLayout>
  )
}
 