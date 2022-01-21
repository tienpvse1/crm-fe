import { ProfileAvatar } from '@components/profile/profile-avatar';
import { Divider } from 'antd';

export const ProfilePage = () => {
  return (
    <div className='profile-container'>
      <div className='header-profile'>
        <h1>Your Profile</h1>
      </div>
      <div style={{ padding: '0 20px' }}>
        <ProfileAvatar />
        <Divider />
      </div>
    </div>
  )
}
