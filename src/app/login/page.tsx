import { AuthForm } from "@/components/auth/AuthForm"

export default function LoginPage() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center p-6 bg-polaris-navy relative overflow-hidden">
      {/* 2030 Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-polaris-cyan/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-polaris-teal/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-md">
        <AuthForm />
      </div>
    </div>
  )
}
