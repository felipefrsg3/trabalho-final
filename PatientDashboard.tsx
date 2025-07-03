
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, FileText, Video, Menu } from 'lucide-react';

interface PatientDashboardProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

const PatientDashboard = ({ onLogout, onNavigate }: PatientDashboardProps) => {
  return (
    <div className="min-h-screen bg-hospital-gray-light">
      <header className="bg-hospital-blue-dark text-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6" />
            <h1 className="text-xl font-bold">Dashboard do Paciente</h1>
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

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-hospital-blue-light"
            onClick={() => onNavigate('schedule')}
          >
            <CardHeader className="text-center">
              <Calendar className="h-12 w-12 text-hospital-blue-light mx-auto mb-2" />
              <CardTitle className="text-hospital-blue-dark">Agendar Consulta</CardTitle>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-hospital-blue-light">
            <CardHeader className="text-center">
              <FileText className="h-12 w-12 text-hospital-green mx-auto mb-2" />
              <CardTitle className="text-hospital-blue-dark">Histórico</CardTitle>
            </CardHeader>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-hospital-blue-light">
            <CardHeader className="text-center">
              <Video className="h-12 w-12 text-hospital-green mx-auto mb-2" />
              <CardTitle className="text-hospital-blue-dark">Teleconsulta</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-hospital-blue-dark flex items-center">
              <Clock className="h-5 w-5 mr-2 text-hospital-green" />
              Próximas Consultas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="text-sm text-gray-500 mt-4">
                Você não possui consultas agendadas no momento.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientDashboard;
