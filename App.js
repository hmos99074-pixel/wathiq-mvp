import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity, FlatList } from "react-native";

export default function App() {
  const [screen, setScreen] = useState("Splash");
  const [userName, setUserName] = useState("زهرة");
  const [service, setService] = useState(null);
  const [company, setCompany] = useState(null);
  const [technician, setTechnician] = useState(null);

  // Splash timer
  useEffect(() => {
    if (screen === "Splash") {
      const t = setTimeout(() => setScreen("Welcome"), 3000);
      return () => clearTimeout(t);
    }
  }, [screen]);

  // ---------------- Splash ----------------
  if (screen === "Splash") {
    return (
      <Center>
        <Text style={styles.logo}>وثيق</Text>
      </Center>
    );
  }

  // ---------------- Welcome ----------------
  if (screen === "Welcome") {
    return (
      <Center>
        <Text style={styles.title}>مرحباً بك</Text>
        <Button title="تسجيل الدخول للأفراد" onPress={() => setScreen("IndividualLogin")} />
        <Gap />
        <Button title="تسجيل الدخول للشركات" onPress={() => setScreen("CompanyLogin")} />
      </Center>
    );
  }

  // ---------------- Individual Login ----------------
  if (screen === "IndividualLogin") {
    return (
      <Page title="تسجيل الدخول للأفراد">
        <TextInput placeholder="رقم الهوية / الإقامة" style={styles.input} />
        <Gap />
        <Button title="تحقق عبر نفاذ" onPress={() => setScreen("Home")} />
      </Page>
    );
  }

  // ---------------- Home ----------------
  if (screen === "Home") {
    const items = [
      { title: "طلب خدمة جديدة", go: "ServiceTypes" },
      { title: "حجوزاتي", go: "MyBookings" },
      { title: "الإشعارات", go: "Notifications" },
      { title: "الملف الشخصي", go: "Profile" },
    ];

    return (
      <Page title={`مرحباً ${userName}`}>
        {items.map((i) => (
          <TouchableOpacity key={i.title} style={styles.item} onPress={() => setScreen(i.go)}>
            <Text>{i.title}</Text>
          </TouchableOpacity>
        ))}
      </Page>
    );
  }

  // ---------------- Service Types ----------------
  if (screen === "ServiceTypes") {
    const services = ["كهرباء", "سباكة", "نجارة", "تكييف"];

    return (
      <Page title="اختر نوع الخدمة">
        {services.map((s) => (
          <TouchableOpacity
            key={s}
            style={styles.item}
            onPress={() => {
              setService(s);
              setScreen("Companies");
            }}
          >
            <Text>{s}</Text>
          </TouchableOpacity>
        ))}
      </Page>
    );
  }

  // ---------------- Companies ----------------
  if (screen === "Companies") {
    const companies = ["شركة ألف", "شركة باء"];

    return (
      <Page title={`شركات ${service}`}>
        {companies.map((c) => (
          <TouchableOpacity
            key={c}
            style={styles.item}
            onPress={() => {
              setCompany(c);
              setScreen("Technicians");
            }}
          >
            <Text>{c}</Text>
          </TouchableOpacity>
        ))}
      </Page>
    );
  }

  // ---------------- Technicians ----------------
  if (screen === "Technicians") {
    const techs = ["أسامة محمد", "محمد علي"];

    return (
      <Page title={`الفنيين - ${company}`}>
        {techs.map((t) => (
          <TouchableOpacity
            key={t}
            style={styles.item}
            onPress={() => {
              setTechnician(t);
              setScreen("Booking");
            }}
          >
            <Text>{t}</Text>
          </TouchableOpacity>
        ))}
      </Page>
    );
  }

  // ---------------- Booking ----------------
  if (screen === "Booking") {
    return (
      <Page title="حجز فني">
        <Text>الفني: {technician}</Text>
        <Gap />
        <TextInput placeholder="التاريخ" style={styles.input} />
        <TextInput placeholder="الوقت" style={styles.input} />
        <TextInput placeholder="شرح المشكلة" style={styles.input} />
        <Gap />
        <Button title="تأكيد الحجز" onPress={() => setScreen("Confirmed")} />
      </Page>
    );
  }

  // ---------------- Confirmed ----------------
  if (screen === "Confirmed") {
    return (
      <Center>
        <Text style={styles.title}>تم الحجز بنجاح ✅</Text>
        <Gap />
        <Button title="العودة للرئيسية" onPress={() => setScreen("Home")} />
      </Center>
    );
  }

  // ---------------- Notifications ----------------
  if (screen === "Notifications") {
    return (
      <Page title="الإشعارات">
        <Text>الفني في طريقه إليك</Text>
      </Page>
    );
  }

  // ---------------- Profile ----------------
  if (screen === "Profile") {
    return (
      <Page title="الملف الشخصي">
        <Text>الاسم: زهرة</Text>
        <Text>الجوال: 050000000</Text>
        <Gap />
        <Button title="تسجيل خروج" onPress={() => setScreen("Welcome")} />
      </Page>
    );
  }

  // ---------------- Company Login ----------------
  if (screen === "CompanyLogin") {
    return (
      <Page title="دخول الشركات">
        <TextInput placeholder="رقم السجل التجاري" style={styles.input} />
        <Gap />
        <Button title="دخول" onPress={() => setScreen("CompanyDashboard")} />
      </Page>
    );
  }

  // ---------------- Company Dashboard ----------------
  if (screen === "CompanyDashboard") {
    return (
      <Page title="لوحة الشركة">
        <Text>حجوزات جديدة: 4</Text>
        <Text>حجوزات منجزة: 12</Text>
      </Page>
    );
  }

  return null;
}

/* ---------- Components ---------- */

function Center({ children }) {
  return <View style={styles.center}>{children}</View>;
}

function Page({ title, children }) {
  return (
    <View style={styles.page}>
      <Text style={styles.header}>{title}</Text>
      {children}
    </View>
  );
}

function Gap() {
  return <View style={{ height: 12 }} />;
}

/* ---------- Styles ---------- */

const styles = {
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  page: {
    flex: 1,
    padding: 20,
  },
  logo: {
    fontSize: 42,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  item: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    marginBottom: 10,
  },
};
