import React, { useState, useEffect } from "react";
import CircularProgressButton from "./CircularProgressButton";
import ListCatalogs from "./ListCatalogs";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import FlagForms from "./FlagsForm";
import DeleteFlagForm from "./DeleteFlagForm";
import CreateFlagForm from "./CreateFlagForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 600,
  heigth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Catalog = () => {
  const [isLoaded, setisLoaded] = useState(false);
  const [catalogs, setCatalogs] = useState([]);
  const [error, setError] = useState(null);

  //Create
  const [openCreate, setCreateOpen] = React.useState(false);
  const handleCreateOpen = () => setCreateOpen(true);
  const handleCreateClose = () => setCreateOpen(false);

  //Edit
  const [openEdit, setEditOpen] = React.useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  // Delete
  const [openDelete, setDeleteOpen] = React.useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  const getFlags = () => {
    setisLoaded(false);
    fetch("https://localhost:5001/api/Flags")
      .then((res) => {
        return res.json();
      })
      .then(
        (data) => {
          setisLoaded(true);
          setCatalogs(data);
        },
        (error) => {
          setisLoaded(false);
          setError(error);
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      getFlags();
    }, 2000);
  }, []);
  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 5 } }}>
        <Fab color="success" aria-label="add" onClick={getFlags}>
          <DownloadIcon />
        </Fab>
        <Fab color="primary" aria-label="create" onClick={handleCreateOpen}>
          <AddIcon />
        </Fab>
        <Fab color="warning" aria-label="edit" onClick={handleEditOpen}>
          <EditIcon />
        </Fab>
        <Fab color="error" aria-label="delete" onClick={handleDeleteOpen}>
          <DeleteIcon />
        </Fab>
      </Box>
      {/* Create */}
      <Modal
        open={openCreate}
        onClose={handleCreateClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateFlagForm
            updateLeaderboardArray={() => {}}
            catalogs={catalogs}
          />
        </Box>
      </Modal>

      <Modal
        open={openEdit}
        onClose={handleEditClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FlagForms updateLeaderboardArray={() => {}} catalogs={catalogs} />
        </Box>
      </Modal>
      {/* //Delete */}
      <Modal
        open={openDelete}
        onClose={handleDeleteClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <FlagForms updateLeaderboardArray={() => {}} catalogs={catalogs} /> */}
          <DeleteFlagForm
            updateLeaderboardArray={() => {}}
            catalogs={catalogs}
          />
        </Box>
      </Modal>
      <Banderas error={error} isLoaded={isLoaded} catalogs={catalogs} />
    </div>
  );
};

const Banderas = (props) => {
  const { error, isLoaded, catalogs } = props;
  if (error) {
    return <h1>Error Found</h1>;
  } else if (!isLoaded) {
    return <CircularProgressButton />;
  } else {
    return <ListCatalogs catalogs={catalogs} />;
  }
};

export default Catalog;
