"use client";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import {
  PowerIcon,
  UserCircleIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
export default function MenuAccount() {
  const router = useRouter();
  const { logout, user } = useAuth0();
  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="candice wu"
          className="cursor-pointer"
          src={user.picture}
        />
      </MenuHandler>
      <MenuList className="border-none bg-gray-900 ring-0">
        <MenuItem
          onClick={() => router.push("/account")}
          className="flex items-center gap-2 hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800"
        >
          <UserCircleIcon
            strokeWidth={2}
            className="h-4 w-4 stroke-lightSolid"
          />
          <Typography
            variant="small"
            className="font-Hacen-Tunisia text-lightSolid"
          >
            الملف الشخصي
          </Typography>
        </MenuItem>

        <MenuItem className="flex items-center gap-2 hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800">
          <LifebuoyIcon strokeWidth={2} className="h-4 w-4 stroke-lightSolid" />
          <Typography
            variant="small"
            className="font-Hacen-Tunisia text-lightSolid"
          >
            مساعدة
          </Typography>
        </MenuItem>
        <hr className="my-2 border-lightSolid" />
        <MenuItem
          onClick={() => logout()}
          className="flex items-center gap-2 hover:bg-gray-800 focus:bg-gray-800 active:bg-gray-800"
        >
          <PowerIcon strokeWidth={2} className="h-4 w-4 stroke-lightSolid" />
          <Typography
            variant="small"
            className="font-Hacen-Tunisia text-lightSolid"
          >
            تسجيل الخروج
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
