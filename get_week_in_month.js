let year = 2019;  // change year
    let month = 4; // change month here
    let startDate = moment([year, month - 1])
    let endDate = moment(startDate).endOf('month');

    var dates = [];
    var weeks = [];

    var per_week = [];
    var difference = endDate.diff(startDate, 'days');

    per_week.push(startDate.toDate())
    let index = 0;
    let last_week = false;
    while (startDate.add(1, 'days').diff(endDate) < 0) {
      if (startDate.day() != 0) {
        per_week.push(startDate.toDate())
      }
      else {
        if ((startDate.clone().add(7, 'days').month() == (month - 1))) {
          weeks.push(per_week)
          per_week = []
          per_week.push(startDate.toDate())
        }
        else if (Math.abs(index - difference) > 0) {
          if (!last_week) {
            weeks.push(per_week);
            per_week = [];
          }
          last_week = true;
          per_week.push(startDate.toDate());
        }
      }
      index += 1;
      if ((last_week == true && Math.abs(index - difference) == 0) ||
        (Math.abs(index - difference) == 0 && per_week.length == 1)) {
        weeks.push(per_week)
      }
      dates.push(startDate.clone().toDate());
    }
    console.log(weeks);
