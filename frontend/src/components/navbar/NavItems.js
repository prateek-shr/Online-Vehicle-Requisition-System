import {
  AiOutlineHome,
  AiOutlineUserAdd,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineUsergroupDelete,
} from 'react-icons/ai';
import {
  RiDashboardLine,
  RiLogoutCircleLine,
  RiLoginCircleLine,
} from 'react-icons/ri';

export const getNavItems = (props) => ({
  common: [
    {
      label: 'Home',
      href: '/',
      type: 'button',
      icon: <AiOutlineHome fontSize={28} />,
    },
  ],
  noAuth: [
    {
      label: 'Login',
      href: '/signin',
      type: 'button',
      buttonType: 'outlined',
      class: props.classes.signInButton,
      icon: <RiLoginCircleLine fontSize={28} />,
    },
    {
      label: 'Sign Up',
      href: '/signup',
      type: 'button',
      icon: <AiOutlineUserAdd fontSize={28} />,
      buttonType: 'contained',
      class: props.classes.signUpButton,
    },
  ],
  auth: [
    {
      label: (props.user && props.user.name) || 'User',
      icon: <AiOutlineUser fontSize={28} />,
      showInNavbar: false,
    },
    {
      label: 'Dashboard',
      icon: <RiDashboardLine fontSize={28} />,
      type: 'button',
      href: '/dashboard',
    },
    {
      label: 'Order',
      icon: <RiDashboardLine fontSize={28} />,
      type: 'button',
      href: '/order',
    },
    {
      label: 'Logout',
      icon: <RiLogoutCircleLine fontSize={28} />,
      type: 'button',
      buttonType: 'contained',
      class: props.classes.signUpButton,
      onClick: () => props.dispatch(props.logout()),
    },
  ],
  admin: [
    {
      label: (props.user && props.user.name) || 'User',
      icon: <AiOutlineUser fontSize={28} />,
      showInNavbar: false,
    },
    {
      label: 'Users',
      icon: <AiOutlineUsergroupDelete fontSize={28} />,
      type: 'button',
      href: '/admin/users',
    },
    {
      label: 'Orders',
      icon: <AiOutlineShoppingCart fontSize={28} />,
      type: 'button',
      href: '/admin/orders',
    },
    {
      label: 'Logout',
      icon: <RiLogoutCircleLine fontSize={28} />,
      type: 'button',
      buttonType: 'contained',
      class: props.classes.signUpButton,
      onClick: () => props.dispatch(props.logout())
    },
  ],
});
