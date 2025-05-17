body {
  background: #121212;
  color: #eee;
  font-family: Arial, sans-serif;
  padding: 40px 20px;
  text-align: center;
}

#game-area {
  position: relative;
  height: 400px;
  margin-top: 30px;
  border: 1px solid #333;
  background: #121212;
  overflow: hidden;
}

.glitch-box {
  position: absolute;
  width: 30px;           /* smaller size */
  height: 30px;          /* smaller size */
  line-height: 30px;
  background: rgba(34, 34, 34, 0.3);  /* more transparent */
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 18px;
  color: rgba(85, 85, 85, 0.5);       /* lighter color */
  cursor: pointer;
  user-select: none;
  text-align: center;
  transition: border-color 0.3s, color 0.3s, background-color 0.3s;
  filter: drop-shadow(0 0 1px #000);
}

.glitch-box:hover {
  border-color: #00ff99;
  color: #00ff99;
  background-color: rgba(0, 255, 153, 0.3);
  filter: drop-shadow(0 0 8px #00ff99);
}

.subtle-hint {
  margin-top: 20px;
  font-style: italic;
  color: #888;
  font-size: 0.9rem;
}

#fake-link {
  color: #888;
  text-decoration: none;
  cursor: default;
}

#fake-link:hover {
  text-decoration: underline;
}
