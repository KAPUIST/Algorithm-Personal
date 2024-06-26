function solution(today, terms, privacies) {

    const [todayYear, todayMonth, todayDay] = today.split('.').map(Number);

    const termsMap = {};
    terms.forEach(term => {
        const [type, period] = term.split(' ');
        termsMap[type] = Number(period);
    });


    const result = [];

    privacies.forEach((privacy, index) => {
        const [date, type] = privacy.split(' ');
        const [year, month, day] = date.split('.').map(Number);

        let newYear = year;
        let newMonth = month + termsMap[type];
        let newDay = day - 1;

        if (newDay === 0) {
            newMonth -= 1;
            newDay = 28;
        }

        if (newMonth > 12) {
            newYear += Math.floor((newMonth - 1) / 12);
            newMonth = ((newMonth - 1) % 12) + 1;
        }

        if (
            newYear < todayYear ||
            (newYear === todayYear && newMonth < todayMonth) ||
            (newYear === todayYear && newMonth === todayMonth && newDay < todayDay)
        ) {
            result.push(index + 1);
        }
    });

    return result;
}
