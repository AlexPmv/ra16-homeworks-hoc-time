import React, {useState} from 'react';
import moment from 'moment';

function DateTimePretty(props) {
  
  const time = moment(moment(Date.now()) - moment(props.date))

  if (moment.duration(time).years() > 0) {
    return (
      <DateTime {...props} {...{date: `${moment.duration(time).years()} года назад`}} />
    )
  }

  if (moment.duration(time).months() > 0) {
    return (
      <DateTime {...props} {...{date: `${moment.duration(time).months()} месяцев назад`}} />
    )
  }

  if (moment.duration(time).days() > 0) {
    return (
      <DateTime {...props} {...{date: `${moment.duration(time).days()} дней назад`}} />
    )
  }

  if (moment.duration(time).hours() > 0) {
    return (
      <DateTime {...props} {...{date: `${moment.duration(time).hours()} часов назад`}} />
    )
  }

  if (moment.duration(time).minutes() > 0) {
    return (
      <DateTime {...props} {...{date: `${moment.duration(time).minutes()} минут назад`}} />
    )
  }

  return (
    <DateTime {...props} />
  )
}

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2020-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-03-19 15:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-11-10 15:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-03-19 21:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}