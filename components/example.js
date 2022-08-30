import { Menu } from "@headlessui/react";
import { useRouter } from "next/router";

function MyDropdown() {
  const router = useRouter();

  return (
    <Menu>
      <Menu.Button>
        <button>More</button>
      </Menu.Button>
      <Menu.Items>
        <Menu.Item
          as="div"
          onClick={() => {
            router.push({
              pathname: href,
            });
          }}
        >
          <a>Account Settings</a>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
