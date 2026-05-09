<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

// --- Configuration Loader ---
function loadEnv($path) {
    if (!file_exists($path)) return;
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        list($name, $value) = explode('=', $line, 2);
        $_ENV[trim($name)] = trim($value);
    }
}

loadEnv(__DIR__ . '/.env');

$db_host = $_ENV['DB_HOST'] ?? 'localhost';
$db_user = $_ENV['DB_USER'] ?? '';
$db_pass = $_ENV['DB_PASS'] ?? '';
$db_name = $_ENV['DB_NAME'] ?? 'hasnalabs_db';

// --- Database Connection ---
$conn = new mysqli($db_host, $db_user, $db_pass);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Create database and table if not exists
$conn->query("CREATE DATABASE IF NOT EXISTS $db_name");
$conn->select_db($db_name);

$conn->query("CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");

$action = $_GET['action'] ?? '';

// --- Routes ---

// 1. Handle Contact Form Submission
if ($action === 'contact' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    $name = $conn->real_escape_string($input['name'] ?? '');
    $email = $conn->real_escape_string($input['email'] ?? '');
    $message = $conn->real_escape_string($input['message'] ?? '');

    if ($name && $email && $message) {
        $sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";
        if ($conn->query($sql)) {
            echo json_encode(["success" => true, "message" => "Pesan terkirim"]);
        } else {
            echo json_encode(["error" => "Gagal menyimpan pesan"]);
        }
    } else {
        echo json_encode(["error" => "Data tidak lengkap"]);
    }
    exit;
}

// 2. Handle Admin Login
if ($action === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);
    $username = $input['username'] ?? '';
    $password = $input['password'] ?? '';

    // Simplified auth for demonstration, should be more secure in production
    if ($username === 'admin' && ($password === 'hasnalabs2026')) {
        echo json_encode(["success" => true, "token" => "hasna_secret_session"]);
    } else {
        http_response_code(401);
        echo json_encode(["error" => "Login gagal"]);
    }
    exit;
}

// 3. Handle Fetch Messages (Admin Only)
if ($action === 'messages' && $_SERVER['REQUEST_METHOD'] === 'GET') {
    $token = $_GET['token'] ?? '';
    if ($token !== 'hasna_secret_session') {
        http_response_code(403);
        echo json_encode(["error" => "Unauthorized"]);
        exit;
    }

    $result = $conn->query("SELECT * FROM contacts ORDER BY created_at DESC");
    $messages = [];
    while ($row = $result->fetch_assoc()) {
        $messages[] = $row;
    }
    echo json_encode($messages);
    exit;
}

echo json_encode(["message" => "HasnaLabs API Bridge Ready"]);
$conn->close();
?>
