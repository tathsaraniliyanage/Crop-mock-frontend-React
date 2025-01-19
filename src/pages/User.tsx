import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, saveUser, removeUser} from "../reducers/UserSlice.tsx";

export function User() {

  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  // State for managing modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [newUser, setNewUser] = useState({
      email :"",
      password :"",
      role :"",
  
  });

    return (
        <>
          User

        </>
    );
}