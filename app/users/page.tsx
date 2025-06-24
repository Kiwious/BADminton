import { prisma } from "@/lib/prisma";

export async function UserPage() {
    const users = await prisma.user.findMany()

    const createUser = async () => {}
    return (
        <div>
            <div>Users</div>
            <div>{JSON.stringify(users)}</div>
            <div onClick={createUser}>Create new user</div>
        </div>
    )
}