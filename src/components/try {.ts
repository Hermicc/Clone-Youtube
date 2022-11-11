try {
  const response = await fetch(
    "https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a0644eddf1msh3608d360346704bp138b89jsn2b8d5814e480",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    }
  );

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}
