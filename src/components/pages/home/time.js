export const generateTime = (time) => {
    const timeDiff = (new Date() - new Date(time)) / 1000;

    let timeName;
    let newTimeDiff;

    if (timeDiff < 60) {
        newTimeDiff = Number.parseInt(timeDiff);
        if (newTimeDiff > 1) {
            timeName = "secs";
        } else {
            timeName = "sec";
        }
    }
    if (timeDiff > 60) {
        newTimeDiff = Number.parseInt(timeDiff / 60);
        if (newTimeDiff > 1) {
            timeName = "mins";
        } else {
            timeName = "min";
        }
    }
    if (timeDiff > 60 * 60) {
        newTimeDiff = Number.parseInt(timeDiff / (60 * 60));
        if (newTimeDiff > 1) {
            timeName = "hours";
        } else {
            timeName = "hour";
        }
    }
    if (timeDiff > 60 * 60 * 24) {
        newTimeDiff = Number.parseInt(timeDiff / (60 * 60 * 24));
        if (newTimeDiff > 1) {
            timeName = "days";
        } else {
            timeName = "day";
        }
    }
    if (timeDiff > 60 * 60 * 24 * 365) {
        newTimeDiff = Number.parseInt(timeDiff / (60 * 60 * 24 * 365));
        if (newTimeDiff > 1) {
            timeName = "years";
        } else {
            timeName = "year";
        }
    }

    return { timeName, newTimeDiff };
};
