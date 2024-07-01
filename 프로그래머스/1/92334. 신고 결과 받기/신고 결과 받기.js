function solution(id_list, report, k) {
    const reportMap = new Map();
    const reportedCount = new Map();
    id_list.forEach(id => {
        reportMap.set(id, new Set());
        reportedCount.set(id, 0);
    });

    report.forEach(entry => {
        const [reporter, reported] = entry.split(' ');
        if (!reportMap.get(reporter).has(reported)) {
            reportMap.get(reporter).add(reported);
            reportedCount.set(reported, reportedCount.get(reported) + 1);
        }
    });

    const suspendedUsers = new Set();
    reportedCount.forEach((count, user) => {
        if (count >= k) {
            suspendedUsers.add(user);
        }
    });
    const result = id_list.map(id => {
        let mailCount = 0;
        reportMap.get(id).forEach(reported => {
            if (suspendedUsers.has(reported)) {
                mailCount += 1;
            }
        });
        return mailCount;
    });
    
    return result;
}