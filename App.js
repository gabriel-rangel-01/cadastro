import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";

export default function App() {
  const [screen, setScreen] = useState("welcome");

  const [form, setForm] = useState({
    nome: "",
    nascimento: "",
    email: "",
    telefone: "",
  });

  function handleChange(field, value) {
    setForm({ ...form, [field]: value });
  }

  function handleSubmit() {
    if (!form.nome || !form.email || !form.telefone || !form.nascimento) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
    console.log(form);
  }

  if (screen === "welcome") {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Bem-vindo 👋</Text>
        <Text style={styles.subtitle}>
          Aplicativo híbrido feito com Expo
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen("form")}
        >
          <Text style={styles.buttonText}>Ir para cadastro</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={form.nome}
        onChangeText={(text) => handleChange("nome", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de nascimento (DD/MM/AAAA)"
        value={form.nascimento}
        onChangeText={(text) => handleChange("nascimento", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(text) => handleChange("email", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="phone-pad"
        value={form.telefone}
        onChangeText={(text) => handleChange("telefone", text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setScreen("welcome")}>
        <Text style={styles.link}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#4a90e2",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    textAlign: "center",
    color: "#4a90e2",
  },
});
