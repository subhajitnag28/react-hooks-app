import React, { useState } from 'react';

/** counter operation with object 
 * useState automatically not merge the object
*/
const HookCounterThree = () => {
    const [userName, setName] = useState({ firstName: "", lastName: "" });
    const updateName = (event) => {
        const { name, value } = event.target;
        setName({ ...userName, [name]: value });
    };
    return (
        <form>
            <input type="text" name="firstName" value={userName.firstName || ''} onChange={(e) => updateName(e)} />
            <input type="text" name="lastName" value={userName.lastName || ''} onChange={(e) => updateName(e)} />
            <hr />
            <div>FirstName:- {userName.firstName || ''}</div>
            <div>LastName:- {userName.lastName || ''}</div>
        </form>
    )
};
export default HookCounterThree;