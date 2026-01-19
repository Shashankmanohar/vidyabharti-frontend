import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    LogOut,
    Users,
    Calendar,
    Mail,
    Phone,
    MapPin,
    MessageSquare,
    TrendingUp,
    GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface BranchVisit {
    _id: string;
    name: string;
    email: string;
    phone: string;
    branch: string;
    preferredDate: string;
    message: string;
    submittedAt: string;
}

interface ContactInquiry {
    _id: string;
    parentName: string;
    phone: string;
    email: string;
    childName: string;
    grade: string;
    message: string;
    submittedAt: string;
}

interface Stats {
    total: number;
    mainCampus: number;
    branchCampus: number;
    contacts: number;
}

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { toast } = useToast();
    const [visits, setVisits] = useState<BranchVisit[]>([]);
    const [contacts, setContacts] = useState<ContactInquiry[]>([]);
    const [stats, setStats] = useState<Stats>({ total: 0, mainCampus: 0, branchCampus: 0, contacts: 0 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (!token) {
            navigate("/admin/login");
            return;
        }
        fetchData(token);
    }, [navigate]);

    const fetchData = async (token: string) => {
        try {
            // Fetch visits
            const visitsResponse = await fetch("http://localhost:5000/api/admin/visits", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const visitsData = await visitsResponse.json();

            // Fetch contacts
            const contactsResponse = await fetch("http://localhost:5000/api/admin/contacts", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const contactsData = await contactsResponse.json();

            // Fetch stats
            const statsResponse = await fetch("http://localhost:5000/api/admin/stats", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const statsData = await statsResponse.json();

            if (visitsData.success && contactsData.success && statsData.success) {
                setVisits(visitsData.data);
                setContacts(contactsData.data);
                setStats(statsData.data);
            } else {
                throw new Error("Failed to fetch data");
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to load data. Please try again.",
                variant: "destructive",
            });
            localStorage.removeItem("adminToken");
            navigate("/admin/login");
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        toast({
            title: "Logged out",
            description: "You have been logged out successfully.",
        });
        navigate("/admin/login");
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-secondary/50">
            {/* Header */}
            <header className="bg-card border-b border-border shadow-medium">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                        <p className="text-sm text-muted-foreground">
                            Manage inquiries and visit requests
                        </p>
                    </div>
                    <Button
                        onClick={handleLogout}
                        variant="outline"
                        className="border-2 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive"
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Logout
                    </Button>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {/* Statistics Cards */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-2xl p-6 shadow-accent"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm opacity-90 mb-1">Branch Visits</p>
                                <p className="text-4xl font-bold">{stats.total}</p>
                            </div>
                            <Users className="w-12 h-12 opacity-80" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-accent to-accent-dark text-accent-foreground rounded-2xl p-6 shadow-medium"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm opacity-90 mb-1">Main Campus</p>
                                <p className="text-4xl font-bold">{stats.mainCampus}</p>
                            </div>
                            <TrendingUp className="w-12 h-12 opacity-80" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-secondary-foreground to-foreground text-primary-foreground rounded-2xl p-6 shadow-medium"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm opacity-90 mb-1">Branch Campus</p>
                                <p className="text-4xl font-bold">{stats.branchCampus}</p>
                            </div>
                            <TrendingUp className="w-12 h-12 opacity-80" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-br from-blue-500 to-blue-700 text-primary-foreground rounded-2xl p-6 shadow-medium"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm opacity-90 mb-1">Contact Inquiries</p>
                                <p className="text-4xl font-bold">{stats.contacts}</p>
                            </div>
                            <GraduationCap className="w-12 h-12 opacity-80" />
                        </div>
                    </motion.div>
                </div>

                {/* Tables with Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-card rounded-2xl shadow-medium border border-border overflow-hidden"
                >
                    <Tabs defaultValue="visits" className="w-full">
                        <div className="p-6 border-b border-border">
                            <TabsList className="grid w-full max-w-md grid-cols-2">
                                <TabsTrigger value="visits">Branch Visits ({visits.length})</TabsTrigger>
                                <TabsTrigger value="contacts">Contact Inquiries ({contacts.length})</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="visits" className="m-0">
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Contact</TableHead>
                                            <TableHead>Branch</TableHead>
                                            <TableHead>Preferred Date</TableHead>
                                            <TableHead>Message</TableHead>
                                            <TableHead>Submitted</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {visits.length === 0 ? (
                                            <TableRow>
                                                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                                    No visit requests yet
                                                </TableCell>
                                            </TableRow>
                                        ) : (
                                            visits.map((visit) => (
                                                <TableRow key={visit._id} className="hover:bg-secondary/50">
                                                    <TableCell className="font-medium">
                                                        <div className="flex items-center gap-2">
                                                            <Users className="w-4 h-4 text-primary" />
                                                            {visit.name}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="space-y-1 text-sm">
                                                            <div className="flex items-center gap-2">
                                                                <Mail className="w-3 h-3 text-muted-foreground" />
                                                                {visit.email}
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Phone className="w-3 h-3 text-muted-foreground" />
                                                                {visit.phone}
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center gap-2">
                                                            <MapPin className="w-4 h-4 text-accent" />
                                                            <span className="font-medium">{visit.branch}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center gap-2">
                                                            <Calendar className="w-4 h-4 text-primary" />
                                                            {new Date(visit.preferredDate).toLocaleDateString("en-IN")}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="max-w-xs">
                                                        {visit.message ? (
                                                            <div className="flex items-start gap-2">
                                                                <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                                                <span className="text-sm line-clamp-2">{visit.message}</span>
                                                            </div>
                                                        ) : (
                                                            <span className="text-muted-foreground text-sm">No message</span>
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="text-sm text-muted-foreground">
                                                        {formatDate(visit.submittedAt)}
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </TabsContent>

                        <TabsContent value="contacts" className="m-0">
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Parent Name</TableHead>
                                            <TableHead>Contact</TableHead>
                                            <TableHead>Child Name</TableHead>
                                            <TableHead>Class</TableHead>
                                            <TableHead>Message</TableHead>
                                            <TableHead>Submitted</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {contacts.length === 0 ? (
                                            <TableRow>
                                                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                                    No contact inquiries yet
                                                </TableCell>
                                            </TableRow>
                                        ) : (
                                            contacts.map((contact) => (
                                                <TableRow key={contact._id} className="hover:bg-secondary/50">
                                                    <TableCell className="font-medium">
                                                        <div className="flex items-center gap-2">
                                                            <Users className="w-4 h-4 text-primary" />
                                                            {contact.parentName}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="space-y-1 text-sm">
                                                            {contact.email && (
                                                                <div className="flex items-center gap-2">
                                                                    <Mail className="w-3 h-3 text-muted-foreground" />
                                                                    {contact.email}
                                                                </div>
                                                            )}
                                                            <div className="flex items-center gap-2">
                                                                <Phone className="w-3 h-3 text-muted-foreground" />
                                                                {contact.phone}
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center gap-2">
                                                            <GraduationCap className="w-4 h-4 text-accent" />
                                                            <span className="font-medium">{contact.childName}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span className="font-medium capitalize">{contact.grade.replace('-', ' ')}</span>
                                                    </TableCell>
                                                    <TableCell className="max-w-xs">
                                                        {contact.message ? (
                                                            <div className="flex items-start gap-2">
                                                                <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                                                <span className="text-sm line-clamp-2">{contact.message}</span>
                                                            </div>
                                                        ) : (
                                                            <span className="text-muted-foreground text-sm">No message</span>
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="text-sm text-muted-foreground">
                                                        {formatDate(contact.submittedAt)}
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </TabsContent>
                    </Tabs>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminDashboard;
