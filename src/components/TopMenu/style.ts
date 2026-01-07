import { StyleSheet } from "react-native";
import Tipografia from "../../themes/tipografia";
import colors from "../../themes/colors";

const style = StyleSheet.create({
  // O "root" do componente
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingBottom: 15,
    gap: 20, // Distância entre o Header e as Tabs
  },

  // Área superior (Onde ficava o TitleContainer)
  header: {
    flexDirection: "row",
    justifyContent: "space-between", // O segredo para separar Título <---> Ícone
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  // Estilo do Texto "Não se Esqueça"
  headerTitle: {
    fontSize: 24, 
    fontFamily: "Inter",
    fontWeight: "bold",
    color: "#333",
  },

  // Área do ícone (hamburger)
  menuButton: {
    padding: 5, // Área de toque maior
  },

  // Container das Abas (Tabs)
  tabsContainer: {
    flexDirection: "row",
    
    alignItems: 'center'
  },

  // Botão da aba ATIVA (Roxo)
  tabButtonActive: {
    backgroundColor: colors.primary, // Roxo
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row', // Ícone ao lado do texto
    gap: 8,
    
    // Sombra suave
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  tabTextActive: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  // Botão da aba INATIVA (Transparente)
  tabButtonInactive: {
    paddingVertical: 10,
    paddingHorizontal: 16, // Mantém o mesmo tamanho de toque
    flexDirection: 'row',
    gap: 8,
  },

  tabTextInactive: {
    color: '#333',
    fontWeight: 'bold',
  }
});

export default style;