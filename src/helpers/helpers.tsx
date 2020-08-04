export const getUsersData = (username: string) => {
        console.log('Calling ' + username);
        fetch(`https://api.github.com/users/${username}`)
        .then(response=> response.json())
        .then(data=>{
            console.log(data);
            return data.login ? data : null;
        });
    };
