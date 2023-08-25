-- schema.sql

-- Create users table if not exists
CREATE TABLE IF NOT EXISTS users
(
    id         SERIAL PRIMARY KEY,
    jwt_token  TEXT NOT NULL, -- JWT token for authentication
    auth_id    VARCHAR(100) NOT NULL, -- MongoDB auth ID
    username   VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- messages.sql
CREATE TABLE messages
(
    id           SERIAL PRIMARY KEY,
    sender_id    INT,
    recipient_id INT,
    content      TEXT,
    created_at   TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (sender_id) REFERENCES users (id),
    FOREIGN KEY (recipient_id) REFERENCES users (id)
);

-- likes.sql
CREATE TABLE likes
(
    id         SERIAL PRIMARY KEY,
    user_id    INT,
    message_id INT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (message_id) REFERENCES messages (id)
);

-- dislikes.sql
CREATE TABLE dislikes
(
    id         SERIAL PRIMARY KEY,
    user_id    INT,
    message_id INT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (message_id) REFERENCES messages (id)
);

-- groups.sql
CREATE TABLE groups
(
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- group_members.sql
CREATE TABLE group_members
(
    id         SERIAL PRIMARY KEY,
    user_id    INT,
    group_id   INT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (group_id) REFERENCES groups (id)
);

-- group_messages.sql
CREATE TABLE group_messages
(
    id         SERIAL PRIMARY KEY,
    group_id   INT,
    sender_id  INT,
    content    TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (group_id) REFERENCES groups (id),
    FOREIGN KEY (sender_id) REFERENCES users (id)
);
