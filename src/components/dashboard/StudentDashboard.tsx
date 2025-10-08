import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Checkbox } from '../ui/checkbox';
import {
  Calendar,
  TrendingUp,
  Target,
  BookOpen,
  Clock,
  Award,
  Brain,
  CheckCircle,
  AlertCircle,
  Play,
  BarChart3,
  Home,
  FileText,
  ClipboardList,
  Video,
  Link as LinkIcon,
  Star,
  User,
  Bell,
  Settings,
  Flame,
  Plus,
  Trash2,
  RefreshCw,
  ChevronRight,
  X
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  mockStudent,
  mockDenemeler,
  mockPlanGorevleri,
  mockKonular,
  mockQuizler,
  mockKonuOzetleri,
  mockKaynaklar,
  mockKocGorusmeleri,
  mockMotivasyonMesaji,
  mockBugununGorevleri,
  Deneme,
  PlanGorevi,
  Konu,
  Kaynak,
  KocGorusmesi
} from '../../data/mockData';
import { getPlanRecommendation, getTopicRecommendations } from '../../services/aiClient';

export function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('ana-sayfa');
  const [showTasksModal, setShowTasksModal] = useState(false);
  const [denemeler, setDenemeler] = useState<Deneme[]>(mockDenemeler);
  const [planGorevleri, setPlanGorevleri] = useState<PlanGorevi[]>(mockPlanGorevleri);
  const [konular] = useState<Konu[]>(mockKonular);
  const [kaynaklar, setKaynaklar] = useState<Kaynak[]>(mockKaynaklar);
  const [gorusmeler, setGorusmeler] = useState<KocGorusmesi[]>(mockKocGorusmeleri);
  const [selectedKonu, setSelectedKonu] = useState<string | null>(null);
  const [quizActive, setQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isRefreshingPlan, setIsRefreshingPlan] = useState(false);
  const [selectedWeakTopics, setSelectedWeakTopics] = useState<string[]>([]);

  const [newDeneme, setNewDeneme] = useState({
    ders: 'Matematik',
    dogru: 0,
    yanlis: 0,
    bos: 0,
    sure: 0
  });

  const [bildirimler, setBildirimler] = useState({
    gunlukPlan: true,
    miniQuiz: true
  });

  const eksikKonular = konular.filter(k => k.eksikMi);

  const handleYeniDenemeEkle = () => {
    const net = newDeneme.dogru - (newDeneme.yanlis / 4);
    const puan = Math.round(50 + (net * 2.5));

    const yeniDeneme: Deneme = {
      id: (denemeler.length + 1).toString(),
      tarih: new Date().toISOString().split('T')[0],
      ders: newDeneme.ders,
      dogru: newDeneme.dogru,
      yanlis: newDeneme.yanlis,
      bos: newDeneme.bos,
      sure: newDeneme.sure,
      net: parseFloat(net.toFixed(1)),
      puan
    };

    setDenemeler([yeniDeneme, ...denemeler]);
    setNewDeneme({ ders: 'Matematik', dogru: 0, yanlis: 0, bos: 0, sure: 0 });
  };

  const handlePlaniYenile = async () => {
    setIsRefreshingPlan(true);
    const weakTopics = konular.filter(k => selectedWeakTopics.includes(k.id));
    const updatedPlan = await getPlanRecommendation(planGorevleri, weakTopics);
    setPlanGorevleri(updatedPlan);
    setIsRefreshingPlan(false);
  };

  const handleQuizBaslat = () => {
    setQuizActive(true);
    setQuizAnswers(new Array(mockQuizler.length).fill(-1));
    setQuizCompleted(false);
  };

  const handleQuizTamamla = () => {
    setQuizCompleted(true);
  };

  const calculateQuizScore = () => {
    return quizAnswers.filter((answer, index) => answer === mockQuizler[index].dogruIndex).length;
  };

  const denemeTrendData = denemeler
    .slice()
    .reverse()
    .map(d => ({
      tarih: d.tarih.slice(5),
      net: d.net,
      puan: d.puan
    }));

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full flex-wrap h-auto gap-2 bg-white p-2 rounded-xl shadow-sm border border-gray-200">
          <TabsTrigger value="ana-sayfa" className="flex items-center gap-2 transition-all hover:bg-gray-100 hover:text-gray-900">
            <Home className="w-4 h-4" />
            Ana Sayfa
          </TabsTrigger>
          <TabsTrigger value="deneme-sonuclari" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Deneme Sonuçları
          </TabsTrigger>
          <TabsTrigger value="calisma-plani" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Çalışma Planı
          </TabsTrigger>
          <TabsTrigger value="konu-ozetleri" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Konu Özetleri & Quiz
          </TabsTrigger>
          <TabsTrigger value="kaynaklar" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Kaynaklar
          </TabsTrigger>
          <TabsTrigger value="koc-gorusmeleri" className="flex items-center gap-2">
            <ClipboardList className="w-4 h-4" />
            Koç Görüşmeleri
          </TabsTrigger>
          <TabsTrigger value="bildirimler" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Bildirimler
          </TabsTrigger>
          <TabsTrigger value="profil" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Profil & Ayarlar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ana-sayfa" className="space-y-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <ClipboardList className="w-6 h-6 text-white" />
                </div>
                <Badge variant="secondary" className="text-blue-600 bg-blue-50">
                  Bugün
                </Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">Bugünkü Görevler</h3>
              <p className="text-3xl font-bold text-gray-900 mb-1">3</p>
              <p className="text-sm text-gray-600">Tamamlanmamış görev</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <Badge variant="secondary" className="text-green-600 bg-green-50">
                  %87
                </Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">Haftalık Hedef</h3>
              <Progress value={87} className="mb-2" />
              <p className="text-sm text-gray-600">5/7 gün tamamlandı</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <Badge variant="secondary" className="text-purple-600 bg-purple-50">
                  2 gün
                </Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">Yaklaşan Koç Görüşmesi</h3>
              <p className="text-sm font-medium text-gray-900">10 Ekim, 14:00</p>
              <p className="text-sm text-gray-600">Ayşe Demir ile</p>
            </Card>
          </motion.div>

          <div className="flex justify-center">
            <Button
              onClick={() => setShowTasksModal(true)}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Play className="w-5 h-5 mr-2" />
              Hemen Başla
            </Button>
          </div>

          <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-yellow-50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  AI Koç Mesajı
                  <Badge variant="secondary" className="text-orange-600 bg-orange-100">
                    <Flame className="w-3 h-3 mr-1" />
                    {mockStudent.streak} Gün Streak
                  </Badge>
                </h3>
                <p className="text-gray-700">{mockMotivasyonMesaji}</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Güçlü Yönler
              </h3>
              <div className="space-y-3">
                {konular.filter(k => !k.eksikMi && k.tamamlanmaDurumu >= 70).map(konu => (
                  <div key={konu.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{konu.konu}</p>
                      <p className="text-sm text-gray-600">{konu.ders}</p>
                    </div>
                    <Badge className="bg-green-600">{konu.tamamlanmaDurumu}%</Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-red-600" />
                Eksik Konular
              </h3>
              <div className="space-y-3">
                {eksikKonular.slice(0, 3).map(konu => (
                  <div key={konu.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{konu.konu}</p>
                      <p className="text-sm text-gray-600">{konu.ders}</p>
                    </div>
                    <Badge variant="destructive">{konu.tamamlanmaDurumu}%</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="deneme-sonuclari" className="space-y-6 mt-6">
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Yeni Deneme Ekle</h3>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              <div className="md:col-span-1">
                <Label>Ders</Label>
                <Select value={newDeneme.ders} onValueChange={(v) => setNewDeneme({...newDeneme, ders: v})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Matematik">Matematik</SelectItem>
                    <SelectItem value="Fizik">Fizik</SelectItem>
                    <SelectItem value="Kimya">Kimya</SelectItem>
                    <SelectItem value="Biyoloji">Biyoloji</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Doğru</Label>
                <Input
                  type="number"
                  min="0"
                  value={newDeneme.dogru}
                  onChange={(e) => setNewDeneme({...newDeneme, dogru: parseInt(e.target.value) || 0})}
                />
              </div>
              <div>
                <Label>Yanlış</Label>
                <Input
                  type="number"
                  min="0"
                  value={newDeneme.yanlis}
                  onChange={(e) => setNewDeneme({...newDeneme, yanlis: parseInt(e.target.value) || 0})}
                />
              </div>
              <div>
                <Label>Boş</Label>
                <Input
                  type="number"
                  min="0"
                  value={newDeneme.bos}
                  onChange={(e) => setNewDeneme({...newDeneme, bos: parseInt(e.target.value) || 0})}
                />
              </div>
              <div>
                <Label>Süre (dk)</Label>
                <Input
                  type="number"
                  min="0"
                  value={newDeneme.sure}
                  onChange={(e) => setNewDeneme({...newDeneme, sure: parseInt(e.target.value) || 0})}
                />
              </div>
              <div className="flex items-end">
                <Button onClick={handleYeniDenemeEkle} className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Ekle
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Net ve Puan Trendi</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={denemeTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="tarih" tick={{ fontSize: 12 }} />
                  <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="net" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981', r: 4 }} />
                  <Line yAxisId="right" type="monotone" dataKey="puan" stroke="#F59E0B" strokeWidth={2} dot={{ fill: '#F59E0B', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Kayıtlı Denemeler</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Tarih</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Ders</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Doğru</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Yanlış</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Boş</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Net</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Puan</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold text-gray-700">Süre</th>
                  </tr>
                </thead>
                <tbody>
                  {denemeler.map(deneme => (
                    <tr key={deneme.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm">{deneme.tarih}</td>
                      <td className="py-3 px-4 text-sm font-medium">{deneme.ders}</td>
                      <td className="py-3 px-4 text-sm text-center">{deneme.dogru}</td>
                      <td className="py-3 px-4 text-sm text-center">{deneme.yanlis}</td>
                      <td className="py-3 px-4 text-sm text-center">{deneme.bos}</td>
                      <td className="py-3 px-4 text-sm text-center font-semibold text-green-600">{deneme.net}</td>
                      <td className="py-3 px-4 text-sm text-center font-semibold text-blue-600">{deneme.puan}</td>
                      <td className="py-3 px-4 text-sm text-center">{deneme.sure} dk</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Eksik Konu Seç</h3>
            <p className="text-sm text-gray-600 mb-4">
              Bu konuları işaretleyerek AI'ın çalışma planınızı optimize etmesine yardımcı olun.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eksikKonular.map(konu => (
                <div key={konu.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Checkbox
                    id={konu.id}
                    checked={selectedWeakTopics.includes(konu.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedWeakTopics([...selectedWeakTopics, konu.id]);
                      } else {
                        setSelectedWeakTopics(selectedWeakTopics.filter(id => id !== konu.id));
                      }
                    }}
                  />
                  <Label htmlFor={konu.id} className="flex-1 cursor-pointer">
                    <p className="font-medium">{konu.konu}</p>
                    <p className="text-sm text-gray-600">{konu.ders} - Zorluk: {konu.zorluk}</p>
                  </Label>
                  <Badge variant="destructive">{konu.tamamlanmaDurumu}%</Badge>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="calisma-plani" className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Haftalık Çalışma Planı</h2>
            <Button
              onClick={handlePlaniYenile}
              disabled={isRefreshingPlan}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
            >
              {isRefreshingPlan ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Yenileniyor...
                </>
              ) : (
                <>
                  <Brain className="w-4 h-4 mr-2" />
                  Planı Yenile (AI)
                </>
              )}
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {planGorevleri.map(gorev => (
              <motion.div
                key={gorev.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Card className={`p-6 border-0 shadow-lg ${
                  gorev.durum === 'Tamamlandı' ? 'bg-green-50' :
                  gorev.durum === 'Devam Ediyor' ? 'bg-blue-50' :
                  gorev.durum === 'Ertelendi' ? 'bg-red-50' :
                  'bg-white'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={
                          gorev.durum === 'Tamamlandı' ? 'default' :
                          gorev.durum === 'Devam Ediyor' ? 'secondary' :
                          'outline'
                        }>
                          {gorev.durum}
                        </Badge>
                        <Badge variant={
                          gorev.oncelik === 'Yüksek' ? 'destructive' :
                          gorev.oncelik === 'Orta' ? 'default' :
                          'secondary'
                        }>
                          {gorev.oncelik}
                        </Badge>
                        <span className="text-sm font-medium text-gray-600">{gorev.gun}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{gorev.konu}</h3>
                      <p className="text-sm text-gray-600">{gorev.ders}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold">{gorev.sure} dk</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="konu-ozetleri" className="space-y-6 mt-6">
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Konu Seç</h3>
            <Select value={selectedKonu || ''} onValueChange={setSelectedKonu}>
              <SelectTrigger>
                <SelectValue placeholder="Bir konu seçin..." />
              </SelectTrigger>
              <SelectContent>
                {konular.map(konu => (
                  <SelectItem key={konu.id} value={konu.id}>
                    {konu.ders} - {konu.konu}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Card>

          {selectedKonu && (
            <>
              <Card className="p-6 border-0 shadow-lg">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  Konu Özeti
                </h3>
                <div className="space-y-3">
                  {mockKonuOzetleri[0].maddeler.map((madde, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 flex-1">{madde}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {!quizActive ? (
                <Card className="p-6 border-0 shadow-lg text-center">
                  <h3 className="text-lg font-semibold mb-4">Mini Quiz</h3>
                  <p className="text-gray-600 mb-6">Bu konuyla ilgili 5 soruluk mini quiz çözerek bilginizi test edin!</p>
                  <Button onClick={handleQuizBaslat} size="lg" className="bg-gradient-to-r from-green-500 to-green-600">
                    <Play className="w-5 h-5 mr-2" />
                    Quiz Başlat
                  </Button>
                </Card>
              ) : !quizCompleted ? (
                <Card className="p-6 border-0 shadow-lg">
                  <h3 className="text-lg font-semibold mb-6">Mini Quiz</h3>
                  <div className="space-y-6">
                    {mockQuizler.map((quiz, qIndex) => (
                      <div key={quiz.id} className="p-4 border border-gray-200 rounded-lg">
                        <p className="font-semibold mb-4">{qIndex + 1}. {quiz.soru}</p>
                        <div className="space-y-2">
                          {quiz.secenekler.map((secenek, sIndex) => (
                            <label
                              key={sIndex}
                              className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                                quizAnswers[qIndex] === sIndex
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:bg-gray-50'
                              }`}
                            >
                              <input
                                type="radio"
                                name={`quiz-${qIndex}`}
                                checked={quizAnswers[qIndex] === sIndex}
                                onChange={() => {
                                  const newAnswers = [...quizAnswers];
                                  newAnswers[qIndex] = sIndex;
                                  setQuizAnswers(newAnswers);
                                }}
                                className="mr-3"
                              />
                              <span>{secenek}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button
                      onClick={handleQuizTamamla}
                      disabled={quizAnswers.includes(-1)}
                      size="lg"
                      className="bg-gradient-to-r from-green-500 to-green-600"
                    >
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Quiz'i Tamamla
                    </Button>
                  </div>
                </Card>
              ) : (
                <Card className="p-6 border-0 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-white">{calculateQuizScore()}/5</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Quiz Tamamlandı!</h3>
                    <p className="text-gray-600">
                      {calculateQuizScore() === 5 ? 'Mükemmel! Tüm soruları doğru cevapladınız! 🎉' :
                       calculateQuizScore() >= 3 ? 'İyi iş! Konuyu iyi kavramışsınız. 👍' :
                       'Biraz daha çalışmanız gerekebilir. 📚'}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {mockQuizler.map((quiz, qIndex) => {
                      const isCorrect = quizAnswers[qIndex] === quiz.dogruIndex;
                      return (
                        <div key={quiz.id} className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                          <div className="flex items-start gap-3 mb-2">
                            {isCorrect ? (
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                            ) : (
                              <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                            )}
                            <div className="flex-1">
                              <p className="font-semibold mb-2">{qIndex + 1}. {quiz.soru}</p>
                              <p className="text-sm text-gray-700">
                                <span className="font-medium">Doğru Cevap:</span> {quiz.secenekler[quiz.dogruIndex]}
                              </p>
                              {!isCorrect && (
                                <p className="text-sm text-gray-700">
                                  <span className="font-medium">Senin Cevabın:</span> {quiz.secenekler[quizAnswers[qIndex]]}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex justify-center gap-4">
                    <Button
                      onClick={() => {
                        setQuizActive(false);
                        setQuizCompleted(false);
                      }}
                      variant="outline"
                    >
                      Kapat
                    </Button>
                    <Button
                      onClick={handleQuizBaslat}
                      className="bg-gradient-to-r from-blue-500 to-blue-600"
                    >
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Quiz'i Tekrar Çöz
                    </Button>
                  </div>
                </Card>
              )}
            </>
          )}
        </TabsContent>

        <TabsContent value="kaynaklar" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kaynaklar.map(kaynak => (
              <Card key={kaynak.id} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      kaynak.tur === 'Video' ? 'bg-red-100 text-red-600' :
                      kaynak.tur === 'Kitap' ? 'bg-blue-100 text-blue-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {kaynak.tur === 'Video' ? <Video className="w-6 h-6" /> :
                       kaynak.tur === 'Kitap' ? <BookOpen className="w-6 h-6" /> :
                       <LinkIcon className="w-6 h-6" />}
                    </div>
                    <Badge>{kaynak.tur}</Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setKaynaklar(kaynaklar.map(k =>
                        k.id === kaynak.id ? { ...k, favori: !k.favori } : k
                      ));
                    }}
                  >
                    <Star className={`w-5 h-5 ${kaynak.favori ? 'fill-yellow-500 text-yellow-500' : 'text-gray-400'}`} />
                  </Button>
                </div>

                <h3 className="text-lg font-semibold mb-2">{kaynak.baslik}</h3>
                <p className="text-sm text-gray-600 mb-1">{kaynak.konu}</p>
                {kaynak.sure && (
                  <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {kaynak.sure}
                  </p>
                )}

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setKaynaklar(kaynaklar.map(k =>
                        k.id === kaynak.id ? { ...k, tamamlandi: !k.tamamlandi } : k
                      ));
                    }}
                  >
                    {kaynak.tamamlandi ? (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                        Tamamlandı
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Tamamlandı İşaretle
                      </>
                    )}
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-600">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="koc-gorusmeleri" className="space-y-6 mt-6">
          <Card className="p-6 border-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Görüşme Takvimi</h3>
              <Button className="bg-gradient-to-r from-purple-500 to-purple-600">
                <Plus className="w-4 h-4 mr-2" />
                Yeni Randevu
              </Button>
            </div>
            <p className="text-sm text-gray-600">
              Koç görüşmeleri için randevu oluşturabilir veya mevcut randevularınızı görüntüleyebilirsiniz.
            </p>
          </Card>

          <div className="space-y-4">
            {gorusmeler.map(gorusme => (
              <Card key={gorusme.id} className="p-6 border-0 shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant={
                        gorusme.durum === 'Bekliyor' ? 'secondary' :
                        gorusme.durum === 'Tamamlandı' ? 'default' :
                        'destructive'
                      }>
                        {gorusme.durum}
                      </Badge>
                      <span className="text-sm font-medium text-gray-600">
                        {gorusme.tarih} - {gorusme.saat}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{gorusme.kocAdi}</h3>
                  </div>
                  {gorusme.durum === 'Bekliyor' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setGorusmeler(gorusmeler.filter(g => g.id !== gorusme.id));
                      }}
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  )}
                </div>

                {gorusme.notlar && (
                  <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900 mb-1">Notlar:</p>
                    <p className="text-sm text-gray-700">{gorusme.notlar}</p>
                  </div>
                )}

                {gorusme.aksiyonlar && gorusme.aksiyonlar.length > 0 && (
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm font-medium text-gray-900 mb-2">Aksiyon Maddeleri:</p>
                    <ul className="space-y-1">
                      {gorusme.aksiyonlar.map((aksiyon, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          {aksiyon}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bildirimler" className="space-y-6 mt-6">
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-6">Bildirim Ayarları</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 mb-1">Günlük Plan Hatırlatıcısı</p>
                  <p className="text-sm text-gray-600">Her gün sabah 9:00'da günlük planınızı hatırlatan bildirim alın</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={bildirimler.gunlukPlan}
                    onChange={(e) => setBildirimler({...bildirimler, gunlukPlan: e.target.checked})}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900 mb-1">Mini Quiz Daveti</p>
                  <p className="text-sm text-gray-600">Hafta içi her gün akşam 7:00'de mini quiz çözme hatırlatması alın</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="toggle"
                    checked={bildirimler.miniQuiz}
                    onChange={(e) => setBildirimler({...bildirimler, miniQuiz: e.target.checked})}
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-lg bg-blue-50">
            <div className="flex items-start gap-3">
              <Bell className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-900 mb-1">Bildirim Kanalları</p>
                <p className="text-sm text-gray-700">
                  Bildirimler e-posta ve uygulama içi mesaj olarak iletilecektir.
                  Daha fazla tercih için lütfen profil ayarlarınızı güncelleyin.
                </p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="profil" className="space-y-6 mt-6">
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-6">Kişisel Bilgiler</h3>
            <div className="space-y-4">
              <div>
                <Label>Ad Soyad</Label>
                <Input value={mockStudent.ad} readOnly />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Sınıf</Label>
                  <Input value={mockStudent.sinif} readOnly />
                </div>
                <div>
                  <Label>Hedef Puan</Label>
                  <Input value={mockStudent.hedefPuan} readOnly />
                </div>
              </div>
              <div>
                <Label>Hedef Okul/Bölüm</Label>
                <Input value={mockStudent.hedefOkul} readOnly />
              </div>
              <div>
                <Label>Sınav Tarihi</Label>
                <Input value={mockStudent.sinavTarihi} readOnly />
              </div>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-6">Paket Bilgisi</h3>
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-orange-50 rounded-lg">
              <div>
                <p className="font-semibold text-lg mb-1">{mockStudent.paket} Paket</p>
                <p className="text-sm text-gray-600">Aktif üyeliğiniz ve özellikleriniz</p>
              </div>
              <Badge className="bg-gradient-to-r from-purple-600 to-orange-600 text-white">
                Aktif
              </Badge>
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-6">İletişim Tercihleri</h3>
            <div className="space-y-4">
              <div>
                <Label>Bildirim Sıklığı</Label>
                <Select defaultValue="normal">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="az">Az (Sadece önemli bildirimler)</SelectItem>
                    <SelectItem value="normal">Normal (Günlük özetler)</SelectItem>
                    <SelectItem value="cok">Çok (Tüm güncellemeler)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={showTasksModal} onOpenChange={setShowTasksModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Bugünkü Görevler</DialogTitle>
            <DialogDescription>
              Bugün tamamlamanız gereken 3 görev var. Hemen başlayalım!
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            {mockBugununGorevleri.map((gorev, index) => (
              <div key={gorev.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{gorev.konu}</p>
                      <p className="text-sm text-gray-600">{gorev.ders}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-gray-700">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{gorev.sure} dk</span>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-green-500 to-green-600">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
