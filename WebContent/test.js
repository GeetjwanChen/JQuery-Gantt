        function getPeriods(start, end) {
            var dates = [];
			dates[start.getFullYear()] = [];
			dates[start.getFullYear()][start.getMonth()] = [];
			dates[start.getFullYear()][start.getMonth()][start.getDate()] = [];
			dates[start.getFullYear()][start.getMonth()][start.getDate()][start.getHours()] = [start];
			var last = start;
			while (last.compareTo(end) == -1) {
				var next = last.clone().addMinutes(30);
				if (!dates[next.getFullYear()]) { 
					dates[next.getFullYear()] = []; 
				}
				if (!dates[next.getFullYear()][next.getMonth()]) { 
					dates[next.getFullYear()][next.getMonth()] = []; 
				}
				if (!dates[next.getFullYear()][next.getMonth()][next.getDate()]) { 
					dates[next.getFullYear()][next.getDate()] = []; 
				}
				if (!dates[next.getFullYear()][next.getMonth()][next.getDate()][next.getHours()]) { 
					dates[next.getFullYear()][next.getMonth()][next.getDate()][next.getHours()] = []; 
				}
				dates[next.getFullYear()][next.getMonth()][next.getDate()][next.getHours()].push(next);
				last = next;
			}
			return dates;
        }
