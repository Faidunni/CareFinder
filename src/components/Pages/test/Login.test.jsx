import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest"; // Add `beforeEach` here
import { MemoryRouter } from "react-router-dom";
import Login from "../Login";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Auth/firebase";
import { toast } from "react-toastify";

// Mock the required modules
vi.mock("react-router-dom", () => ({
  ...vi.requireActual("react-router-dom"),
  useNavigate: () => vi.fn(),
}));

vi.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: vi.fn(),
}));

vi.mock("react-toastify", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

describe("Login Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the login form", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByText(/enter your details/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your phone\/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("logs in the user with valid credentials", async () => {
    signInWithEmailAndPassword.mockResolvedValueOnce({ user: { uid: "123" } });

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/your phone\/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "test@example.com",
        "password123"
      );
      expect(toast.success).toHaveBeenCalledWith("Login Successfully");
    });
  });

  it("shows an error message with invalid credentials", async () => {
    signInWithEmailAndPassword.mockRejectedValueOnce(
      new Error("Invalid Credentials")
    );

    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/your phone\/email/i), {
      target: { value: "invalid@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "wrongpassword" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "invalid@example.com",
        "wrongpassword"
      );
      expect(toast.error).toHaveBeenCalledWith("Invalid Credentials");
    });
  });

  it("toggles password visibility", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const passwordInput = screen.getByLabelText(/password/i);
    const toggleButton = screen.getByRole("button", { name: /password/i });

    expect(passwordInput).toHaveAttribute("type", "password");
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});
