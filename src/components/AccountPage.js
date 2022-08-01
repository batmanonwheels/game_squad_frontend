import React, { useEffect, useState } from "react";

function AccountPage({user}){
    console.log(user)
    return (
        <>
        <h1>Welcome to your account, {user.username.toUpperCase()}!</h1>
        <h2>View your reviews here!</h2>
        </>
    )
}

export default AccountPage;