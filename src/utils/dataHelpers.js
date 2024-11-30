export const isDoorOpen = (day) => {
    const today = new Date();
    return day <= today.getDate() && today.getMonth() === 11;
};


export const isDoorOpenAdmin = () => {
    // Admin can always open all doors, no condition needed
    return true;
};