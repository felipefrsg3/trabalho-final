
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Calendar, Menu } from 'lucide-react';

interface ProfessionalDashboardProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const ProfessionalDashboard = ({ onLogout, onNavigate }: ProfessionalDashboardProps) => {
  return (
    <div className="min-h-screen bg-hospital-gray-light">
      <header className="bg-hospital-blue-dark text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6" />
            <h1 className="text-xl font-bold">Dashboard do Profissional</h1>
          </div>
          <Button 
            onClick={onLogout}
            variant="outline"
            className="text-hospital-blue-dark border-white hover:bg-white"
          >
            Sair
          </Button>
        </div>
      </header>

      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-hospital-blue-dark mb-4">Pacientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-hospital-blue-light">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-hospital-blue-light mx-auto mb-2" />
                <CardTitle className="text-hospital-blue-dark">Pacientes</CardTitle>
              </CardHeader>
            </Card>

            <Card 
              className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-hospital-blue-light"
              onClick={() => onNavigate('calendar')}
            >
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-hospital-green mx-auto mb-2" />
                <CardTitle className="text-hospital-blue-dark">Ver Prontuário</CardTitle>
              </CardHeader>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-hospital-blue-light md:col-span-2">
              <CardHeader className="text-center">
                <FileText className="h-12 w-12 text-hospital-green mx-auto mb-2" />
                <CardTitle className="text-hospital-blue-dark">Emitir Receita</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDashboard;
