const roles = {
  admin: ["create", "update", "delete", "view"],
  editor: ["update", "view"],
  viewer: ["view"]
};

 // Get all role names
 console.log(Object.keys(roles))

 // Check if editor can delete
 let a=roles.editor.includes("delete")
 console.log(a)

 // Create a flat array of all unique permissions
 let b=[...new Set(Object.values(roles).flat()) ]
 console.log(b)

 // Add a new role moderator with permissions (immutably)
 let rc={...roles,moderator:["read","write"]}
 console.log(rc)

 //Convert roles object into array of { role, permissionsCount }
 let arr=Object.entries(roles).map(([role,permissions])=>({role,permissionCount:permissions.length})
)
console.log(arr)