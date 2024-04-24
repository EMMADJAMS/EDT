import { UserButton,auth,useAuth } from '@clerk/nextjs'
export async function getServerSideProps() {
    const { userId } = await auth();
    
    return {
      props: {
        userId: userId || null,
      },
    };
  }
  