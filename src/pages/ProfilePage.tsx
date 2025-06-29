import PostList from '@/components/PostList/PostList';
import { withAuthProtection } from '@/hoc/withAuthProtection';

const ProfilePage = () => {
  return (
    <>
      <PostList />
    </>
  );
};

export default withAuthProtection(ProfilePage);
