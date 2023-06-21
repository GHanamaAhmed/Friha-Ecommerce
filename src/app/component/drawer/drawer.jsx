"use client";
import React, { useEffect } from "react";
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
const item = ["Dashboard", "E-Commerce", "Inbox", "Profile", "Settings"];
export default function DrawerComponent({ onClose, isOpen }) {
  const [open, setOpen] = React.useState(false);
  const closeDrawer = () => {
    setOpen(false);
    onClose();
  };
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="bg-gray-900"
        placement="right"
      >
        <div className="mb-2 flex items-center justify-between py-4 pr-10">
          <h1 className="text-lightSolid">Side Menu</h1>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <List>
          {item.map((e, i) => (
            <ListItem
              key={i}
              className="gap-5 py-5 text-lightSolid hover:bg-gray-800 hover:text-lightSolid focus:bg-blue-gray-800 focus:text-lightSolid"
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5 fill-lightSolid" />
              </ListItemPrefix>
              {e}{" "}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
