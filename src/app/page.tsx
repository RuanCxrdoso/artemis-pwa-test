'use client'

// import { useEffect } from 'react'
import { CircleUser, CreditCard, DollarSign, HelpCircle, Home, Landmark, LogOut, PieChart, RefreshCw, Search, Send, Settings, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ModeToggle } from '@/components/mode-toggle'
import DebitCardComponent from '@/components/debit-card-component'
// import { registerServiceWorker } from './sw-register'

export default function Dashboard() {
  // useEffect(() => {
  //   registerServiceWorker();
  // }, []);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card p-6 hidden md:block">
        <div className="flex items-center mb-8 gap-4">
          <span className="text-2xl font-bold text-primary">iTech Artemis</span>
          <Landmark />
        </div>
        <nav>
          <ul className="space-y-2">
            <li><Button variant="ghost" className="w-full justify-start"><Home className="mr-2" size={20} /> Dashboard</Button></li>
            <li><Button variant="ghost" className="w-full justify-start"><RefreshCw className="mr-2" size={20} /> Transactions</Button></li>
            <li><Button variant="ghost" className="w-full justify-start"><CreditCard className="mr-2" size={20} /> Card Center</Button></li>
            <li><Button variant="ghost" className="w-full justify-start"><User className="mr-2" size={20} /> Contacts</Button></li>
            <li><Button variant="ghost" className="w-full justify-start"><DollarSign className="mr-2" size={20} /> E-Wallet Center</Button></li>
            <li><Button variant="ghost" className="w-full justify-start"><PieChart className="mr-2" size={20} /> Reports</Button></li>
          </ul>
        </nav>
        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-start"><Settings className="mr-2" size={20} /> Settings</Button>
          <Button variant="ghost" className="w-full justify-start"><HelpCircle className="mr-2" size={20} /> Help Center</Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Welcome to iTech Artemis</h1>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size='icon' variant="outline" className="relative h-10 w-10 rounded-full">
                  <CircleUser size={24} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Debit Card Account */}
          <DebitCardComponent />

          {/* Total Balance */}
          <Card className='col-span-2 md:col-span-1 flex flex-col'>
            <CardHeader>
              <CardTitle>Your Total Balance</CardTitle>
            </CardHeader>
            <CardContent className='mt-0 md:mt-12'>
              <div className="text-4xl font-bold mb-2">$ 80,201.50</div>
              <div className="text-sm text-muted-foreground">December 21, 2023 • 03:20 PM</div>
              <div className="flex space-x-2 mt-4">
                <Button className="flex-1"><Send size={16} className="mr-2" /> Send</Button>
                <Button variant="outline" className="flex-1"><RefreshCw size={16} className="mr-2" /> Topup</Button>
                <Button variant="outline" className="flex-1">More</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Recent Transactions */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recent Transactions</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">Last 7 Days</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
                  <DropdownMenuItem>Last 90 Days</DropdownMenuItem>
                  <DropdownMenuItem>All Time</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">P</div>
                    <div>
                      <div className="font-semibold">Paypal - Received</div>
                      <div className="text-sm text-muted-foreground">15 December 2023, 03:30 PM</div>
                    </div>
                  </div>
                  <div className="text-green-600">+ $8,200.00</div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">S</div>
                    <div>
                      <div className="font-semibold">Spotify Premium</div>
                      <div className="text-sm text-muted-foreground">15 December 2023, 07:25 PM</div>
                    </div>
                  </div>
                  <div className="text-red-600">- $19.00</div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">T</div>
                    <div>
                      <div className="font-semibold">Transferwise - Received</div>
                      <div className="text-sm text-muted-foreground">16 December 2023, 10:20 AM</div>
                    </div>
                  </div>
                  <div className="text-green-600">+ $1,200.00</div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Expenses Meter */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Expenses Meter</CardTitle>
              <Button variant="ghost" size="sm"><RefreshCw size={16} /></Button>
            </CardHeader>
            <CardContent>
              <Progress value={85} className="w-full" />
              <div className="text-center mt-4">
                <div className="text-4xl font-bold text-primary">85.5%</div>
                <div className="text-sm text-muted-foreground">Normal Level</div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-sm font-semibold">Total Exp: $1,830.50</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Invoice Activity */}
        <Card className="mt-8">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="hidden md:block text-sm font-medium">Invoice Activity</CardTitle>
            <div className="flex items-center space-x-2">
              <Input type="text" placeholder="Search..." className="w-[150px] sm:w-[250px]" />
              <Button size="sm"><Search size={16} /></Button>
              <Button size="sm">Filter</Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>DATE & TIME</TableHead>
                  <TableHead>INVOICE NUMBER</TableHead>
                  <TableHead>RECIPIENT</TableHead>
                  <TableHead>STATUS</TableHead>
                  <TableHead>ACTION</TableHead>
                  <TableHead className="text-right">AMOUNT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-12-20 14:30</TableCell>
                  <TableCell>INV-001</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View</Button>
                  </TableCell>
                  <TableCell className="text-right">$500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-12-19 09:15</TableCell>
                  <TableCell>INV-002</TableCell>
                  <TableCell>Jane Smith</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View</Button>
                  </TableCell>
                  <TableCell className="text-right">$750.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-12-18 16:45</TableCell>
                  <TableCell>INV-003</TableCell>
                  <TableCell>Bob Johnson</TableCell>
                  <TableCell>Overdue</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">View</Button>
                  </TableCell>
                  <TableCell className="text-right">$1,000.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
