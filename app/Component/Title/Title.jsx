"use client";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/app/firebase";

const Title = () => {
  const theme = useTheme();

  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(null);
  const [fade, setFade] = useState(false);
  const [para, setPara] = useState(true);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"), {
    noSsr: true,
  });

  // Fetch Firestore data (runs once)
  useEffect(() => {
    const getTitle = async () => {
      try {
        const snapshot = await getDocs(collection(db, "title"));
        if (!snapshot.empty) {
          setTitle(snapshot.docs[0].data());
        }
      } catch (error) {
        console.error("Error fetching title:", error);
      } finally {
        setLoading(false);
      }
    };

    getTitle();
  }, []);

  // Toggle text every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);

      setTimeout(() => {
        setPara((prev) => !prev);
        setFade(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!title) return <p>No data found</p>;

  return (
    <div>
      <Typography
        variant={isSmallScreen ? "h4" : "h3"}
        sx={{
          fontWeight: "bold",
          mb: 2,
          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          opacity: fade ? 0 : 1,
          transition: "opacity 0.4s ease-in-out",
        }}
      >
        {para ? title["1stLargePara"] : title["2ndLargePara"]}
      </Typography>

      <Typography
        variant={isSmallScreen ? "h6" : "h5"}
        sx={{
          fontWeight: 400,
          mb: 1,
          textShadow: "0 1px 2px rgba(0,0,0,0.2)",
        }}
      >
      {title['headerTitle']}
      </Typography>

      <Typography
        sx={{
          opacity: fade ? 0 : 1,
          transition: "opacity 0.4s ease-in-out",
        }}
      >
        {para ? title["1stSmallPara"] : title["2ndSmallPara"]}
      </Typography>
    </div>
  );
};

export default Title;
