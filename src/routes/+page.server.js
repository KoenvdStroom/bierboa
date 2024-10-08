import {get_all_users, update_user} from "$lib/postgres.server.js";

export async function load({params}) {
    let users = await get_all_users()
    return {
        users: users
    }
}


export const actions = {
	update: async ({request}) => {
		let data = await request.formData()
        let name = data.get("name")
        let count = data.get("count")
        update_user(name, count)
	},
};