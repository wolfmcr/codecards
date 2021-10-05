import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import DeleteDeckModal from '../DeleteDeckModal';
import CardModal from '../../cardFormComponents/CardModal';

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
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        className="p-0"
        tag="a"
        style={{
          userSelect: 'none',
          cursor: 'pointer',
          textDecoration: 'none'
        }}
      >
        Actions
      </DropdownToggle>
      <DropdownMenu right>
        {/* <DropdownItem header>Actions</DropdownItem> */}
        <DropdownItem onClick={toggleAddModal}>
          <CardModal
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
  );
}
