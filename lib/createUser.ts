import { pb } from '@/lib/pb';
import { ICreateUser } from '@/types/req';

const createUser = async (data: any): Promise<string | undefined> => {
    try {
        await pb.collection<ICreateUser>("users").create<ICreateUser>(data);
    } catch (err: any) {
        return err.message;
    }
};

export default createUser;