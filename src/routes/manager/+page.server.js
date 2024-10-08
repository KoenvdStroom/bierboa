import {add_user, get_all_users, remove_user} from "$lib/postgres.server.js";

export async function load({params}) {
    let users = await get_all_users()
    return {
        users: users
    }
}

export const actions = {
	add: async ({request}) => {
		let data = await request.formData()
        let name = data.get("name")

        add_user(name)
	},
    remove: async({request}) => {
        let data = await request.formData()
        let name = data.get("name")

        remove_user(name)

    }
};