import React, { useState } from 'react';
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Divider,
  Alert,
  ButtonGroup,
  ListGroup,
  ListGroupItem,
  Link
} from 'reactstrap';
import Dots from 'bootstrap-icons/icons/three-dots-vertical.svg';
export default function PopoverMenu() {
  const [popOverIsOpen, setPopoverOpen] = useState(false);

  const toggle = () => {
    setPopoverOpen(!popOverIsOpen);
  };
  return (
    <div>
      <Dropdown isOpen={popOverIsOpen} toggle={toggle} direction="right">
        <DropdownToggle color="none" className="p-0">
          <img src={Dots} alt="" srcset="" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Edit Card</DropdownItem>
          <DropdownItem>Something Else</DropdownItem>

          <DropdownItem>
            <a className="link-danger">Delete Card</a>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
