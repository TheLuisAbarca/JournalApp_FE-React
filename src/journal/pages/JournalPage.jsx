import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      { /* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corrupti laudantium, eveniet aperiam repudiandae debitis quia ea exercitationem asperiores nihil omnis optio eaque minus obcaecati, impedit dolor nemo nobis minima.
      </Typography> */}
      <NothingSelectedView />
      { /* <NoteView /> */ }
      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          '.hover': { backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
  )
}
 