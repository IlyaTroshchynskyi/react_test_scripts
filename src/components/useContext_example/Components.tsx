import { useUserContext } from './context.ts';

export function Sidebar() {
  const user = useUserContext();

  return (
    <div>
      <div>{user.name}</div>
      <div>Subscription Status: {user.isSubscribed}</div>
    </div>
  );
}


export function Profile() {
    console.log('Profile')
  const user = useUserContext();

  return <div className='bg-blue-300'>{user.name}</div>;
}


export function Footer() {
    console.log('Footer')

  return <div className='bg-blue-300'>Footer</div>;
}