"use client"

import { signIn } from "next-auth/react"
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Login() {
    async function handleLogin(formData) {
        const response = await signIn("credentials", {
            redirect: false,
            email   : formData.get("email"),
            password: formData.get("password"),
            token   : formData.get("token"),
        })

        if (!response.ok) {
            alert('Log in failed! Please check your credentials.')
            return
        } 
    
        redirect("/home")
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
                    <p className="text-gray-600">Sign in to your account</p>
                </div>
                
                <form action={handleLogin} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="your@email.com" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition duration-200"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="••••••••" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition duration-200"
                                required
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Token</label>
                            <input 
                                type="text" 
                                name="token" 
                                placeholder="Enter your token" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition duration-200"
                                required
                            />
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition duration-300 shadow-lg hover:shadow-xl"
                    >
                        Sign In
                    </button>
                    
                    <div className="text-center pt-4 border-t border-gray-200">
                        <p className="text-gray-600">
                            Don't have an account?{" "}
                            <Link 
                                href="/register" 
                                className="text-indigo-600 hover:text-indigo-800 font-medium transition duration-200"
                            >
                                Create account
                            </Link>
                        </p>
                    </div>
                </form>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-700 text-center">
                        💡 Contact administrator if you don't have an account
                    </p>
                </div>
            </div>
        </div>
    )
}