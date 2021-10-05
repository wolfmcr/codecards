import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import DeleteDeckModal from '../DeleteDeckModal';
import AddCardModal from '../../addCardComponents/AddCardModal';

export default function ActionMenu(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const toggleAddModal = () => {
    setAddModalOpen(!addModalOpen);
  };

  const toggleDeleteModal = () => {
    console.log('ok');
    setDeleteModalOpen(!deleteModalOpen);
  };

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          className="p-0 text-decoration-none"
          tag="a"
          style={{
            userSelect: 'none',
            cursor: 'pointer'
          }}
        >
          Actions
        </DropdownToggle>
        <DropdownMenu right>
          {/* <DropdownItem header>Actions</DropdownItem> */}
          <DropdownItem onClick={toggleAddModal}>
            <AddCardModal
              isOpen={addModalOpen}
              toggle={toggleAddModal}
              deck={props.deck}
            />
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={toggleDeleteModal}>
            <DeleteDeckModal
              toggle={toggleDeleteModal}
              isOpen={deleteModalOpen}
              deck={props.deck}
            />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
